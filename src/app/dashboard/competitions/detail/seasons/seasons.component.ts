import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CompetitionsService } from '../../competitions.service';
import { Competition, Season } from './../../../../dashboard/dashboard.model';
import { SeasonsModalData } from './seasons.model';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort
  
  dataSource = new MatTableDataSource<Season>();
  displayedColumns: string[] = ['shield', 'winner', 'startDate', 'endDate'];

  competition!: Competition;
  
  constructor(
    private competitionsService: CompetitionsService,
    @Inject(MAT_DIALOG_DATA) private data: SeasonsModalData,
  ) {
    this.competition = this.data.competition;
  }

  ngOnInit(): void {
    this.competitionsService.getCompetition(this.competition.id).subscribe( competition => {
      this.competition = competition;
      this.dataSource.data = competition.seasons;
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
