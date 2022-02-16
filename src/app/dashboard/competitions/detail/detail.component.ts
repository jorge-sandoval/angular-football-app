import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Competition, Team } from '../../dashboard.model';
import { CompetitionsService } from '../competitions.service';
import { SpinnerService } from './../../../shared/spinner/spinner.service';
import { SeasonsComponent } from './seasons/seasons.component';

@Component({
  selector: 'app-competition-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class CompetitionsDetailComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort
  
  dataSource = new MatTableDataSource<Team>();
  displayedColumns: string[] = ['crestUrl', 'name', 'clubColors', 'venue', 'website'];
  
  loading = true;
  competition!: Competition;
  private competitionId!: number;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private competitionsService: CompetitionsService,
    private spinnerService: SpinnerService
  ) {
    this.route.params.subscribe((data) => (this.competitionId = data['id']));
  }

  ngOnInit(): void {
    this.toggleView(true);
    this.competitionsService.getCompetitionAndTeams(this.competitionId)
      .subscribe( competition => {
        this.competition = competition;
        this.dataSource.data = competition.teams;
        this.toggleView(false);
      });
  }

  showTeamns(): void {
    this.dialog.open(SeasonsComponent, {
      width: '650px',
      data: {
        competition: this.competition
      },
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
