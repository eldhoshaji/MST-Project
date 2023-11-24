import { Component } from '@angular/core';
import { SocketService } from 'src/app/core/backend/socket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  players: any[] =[];
  frontNine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  backNine = [10, 11, 12, 13, 14, 15, 16, 17, 18];

  constructor(
    private socketService: SocketService,
  ) {}

  ngOnInit(): void {
    this.socketService.getPlayerData().subscribe((playerInfo:any) => {
      playerInfo['Name'] = playerInfo.First + ' ' + playerInfo.Last
      this.players = [playerInfo, ...this.players];
      console.log(playerInfo)
    });
  }

  getStp(player: any, hole: number) {
    const key = 'Hole' + hole + 'STP'
    return player[key];
  }

  getStrokes(player: any, hole: number) {
    const key = 'Hole' + hole + 'Strokes'
    return player[key];
  }
}
