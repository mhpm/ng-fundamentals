import { Component, Input, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/modules/user/services/auth.service';
import { ISession } from '../../..';
import { VoteService } from '../upvoter/voter.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[] = [];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];

  constructor(
    public authService: AuthService,
    private voterService: VoteService
  ) {}

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSession(this.filterBy);
      this.sortBy === 'name'
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(
        session,
        this.authService.currentUser.userName
      );
    } else {
      this.voterService.addVoter(
        session,
        this.authService.currentUser.userName
      );
    }

    if (this.sortBy === 'votes') this.visibleSessions.sort(sortByVotesDesc);
  }

  userHasVoted(session: ISession): boolean {
    return this.voterService.userHasVoted(
      session,
      this.authService.currentUser.userName
    );
  }

  filterSession(filterBy: string) {
    if (filterBy === 'all') this.visibleSessions = this.sessions.slice(0);
    else
      this.visibleSessions = this.sessions.filter(
        (session) => session.level.toLocaleLowerCase() === filterBy
      );
  }
}
function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
