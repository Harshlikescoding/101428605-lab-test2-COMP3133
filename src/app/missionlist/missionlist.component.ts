import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missions: Mission[] = [];
  searchText: string = '';

  launchStatus: string = '';  // "true" or "false"
  landingStatus: string = ''; // "true" or "false"

  constructor(private spaceXapiService: SpacexapiService, private router: Router) { }

  ngOnInit(): void {
    this.spaceXapiService.allLaunch().subscribe(data => {
      this.missions = data.map((l: any) => {
        return new Mission(
          l.flight_number,
          l.mission_name,
          l.launch_year,
          l.details,
          l.launch_success,
          l.links,
          l.rocket
        );
      });
    });
  }

  launchDetails(number: number) {
    this.router.navigate(['missions', number]);
    console.log(number);
  }

  filteredMissions(): Mission[] {
    return this.missions.filter(mission => {
      // Lowercased search input
      const search = this.searchText.toLowerCase();
  
      // Match search against mission name or launch year
      const matchesSearch = this.searchText === '' ||
        mission.mission_name?.toLowerCase().includes(search) ||
        mission.launch_year?.includes(search); 
  
      // Match launch success
      const matchesLaunch = this.launchStatus === '' ||
        mission.launch_success === (this.launchStatus === 'true');
  
      // Match landing success
      const landSuccess = mission.rocket?.first_stage?.cores?.[0]?.land_success;
      const matchesLanding = this.landingStatus === '' ||
        landSuccess === (this.landingStatus === 'true');
  
      return matchesSearch && matchesLaunch && matchesLanding;
    });
  }
  
}
