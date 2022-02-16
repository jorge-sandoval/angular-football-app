import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Competition } from '../../dashboard.model';
import { SpinnerService } from './../../../shared/spinner/spinner.service';
import { CompetitionsService } from '../competitions.service';

@Component({
  selector: 'app-competititions-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class CometitionsListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort

  displayedColumns: string[] = ['name', 'area', 'seasons', 'plan', 'tier'];
  dataSource = new MatTableDataSource<Competition>();

  season = new Date().getFullYear();
  loading = true;

  constructor(
    private competitionsService: CompetitionsService,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
    this.loadWiew();
  }

  onYearSelected(year: number) {
    this.loadWiew(year.toString());
  }

  loadWiew(year: string = '') {
    this.toggleView(true);
    this.competitionsService.getCompetitionList(year).subscribe( reponse => {
      this.dataSource.data = reponse.competitions;
      this.toggleView(false);
    });
  }

  setUpDataSource() {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (competition, property) => {
      switch (property) {
        case 'name': {
          return competition.name;
        }
        case 'area': {
          return competition.area.name;
        }
        case 'seasons': {
          return competition.numberOfAvailableSeasons;
        }
        case 'plan': {
          return competition.planTier;
        }
        case 'tier': {
          return competition.planTier === 1 ? 0 : 1;
        }
        default: {
          return competition.id;
        }
      }
    }
    this.dataSource.paginator = this.paginator;
  }

  private toggleView(loading: boolean) {
    this.loading = loading;
    this.spinnerService.present(loading);
  }
  ngAfterViewInit() {
    this.setUpDataSource()
  }
}
