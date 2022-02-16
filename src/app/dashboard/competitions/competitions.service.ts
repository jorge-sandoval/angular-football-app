import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Competition, CompetitionAndTeamsResponse, CompetitionsResponse, PlanTiers } from './../dashboard.model'
import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompetitionsService {
  private readonly URL = environment.apiURL + 'competitions'

  constructor(
    private http: HttpClient
  ) {}

  getCompetitionList(season = ''): Observable<CompetitionsResponse> {
    const params = season ? `year=${season}` : '';

    return this.http.get<CompetitionsResponse>(`${this.URL}?${params}`).pipe(
      map( response => {
          response.competitions?.forEach(c => {
            c.planTier = PlanTiers[c.plan] || 0;
          });
          return response;
      })
    );
  }

  getCompetition(id: number): Observable<Competition> {
    return this.http.get<Competition>(`${this.URL}/${id}`);
  }

  getCompetitionAndTeams(id: number): Observable<Competition> {  
    return this.http.get<CompetitionAndTeamsResponse>(`${this.URL}/${id}/teams`).pipe(
      map( response => {
          const competition = response.competition;
          competition.currentSeason = response.season;
          competition.teams = response.teams;

          return competition;
      })
    );
  }
}
