import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Team } from '../dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private readonly URL = environment.apiURL + 'teams'

  constructor(
    private http: HttpClient
  ) {}

  getTeam(id: number): Observable<Team> {
    return this.http.get<Team>(`${this.URL}/${id}`);
  }

}
