import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Player, Team } from '../../dashboard.model';
import { TeamsService } from '../teams.service';
import { SpinnerService } from './../../../shared/spinner/spinner.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class TeamsDetailComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort
  
  dataSource = new MatTableDataSource<Player>();
  displayedColumns: string[] = ['name', 'position', 'nationality'];

  loading = true;
  team!: Team;
  private teamId!: number;

  constructor(
    private route: ActivatedRoute,
    private teamsService: TeamsService,
    private spinnerService: SpinnerService
  ) {
    this.route.params.subscribe((data) => (this.teamId = data['id']));
  }

  ngOnInit(): void {
    this.toggleView(true);
    this.teamsService.getTeam(this.teamId).subscribe( team => {
      this.team = team;
      this.dataSource.data = team.squad;
      this.toggleView(false);
    });
  }

  private toggleView(loading: boolean) {
    this.loading = loading;
    this.spinnerService.present(loading);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
