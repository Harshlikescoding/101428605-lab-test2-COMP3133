import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  number!: number;
  mission: any = {}; // using `any` to accommodate full API response structure

  constructor(
    private spaceXapiService: SpacexapiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.number = this.route.snapshot.params['id'];

    this.spaceXapiService.Launch(this.number).subscribe(
      (data) => {
        this.mission = data; // ✅ assign full response
      },
      (error) => console.log('Error fetching mission:', error)
    );
  }

  backToMissionList() {
    this.router.navigate(['missions']);
  }
}
