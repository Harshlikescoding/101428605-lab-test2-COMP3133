export class Mission {
    flight_number!: number;
    mission_name!: string;
    launch_year!: string;
    details!: string;
    launch_success!: boolean;
  
    links!: {
      mission_patch_small: string;
      article_link: string;
      wikipedia: string;
      video_link: string;
    };
  
    rocket!: {
      first_stage: {
        cores: {
          land_success: boolean;
        }[];
      };
    };
  
    constructor(
      flight_number?: number,
      mission_name?: string,
      launch_year?: string,
      details?: string,
      launch_success?: boolean,
      links?: {
        mission_patch_small: string;
        article_link: string;
        wikipedia: string;
        video_link: string;
      },
      rocket?: {
        first_stage: {
          cores: {
            land_success: boolean;
          }[];
        };
      }
    ) {
      if (flight_number !== undefined) this.flight_number = flight_number;
      if (mission_name !== undefined) this.mission_name = mission_name;
      if (launch_year !== undefined) this.launch_year = launch_year;
      if (details !== undefined) this.details = details;
      if (launch_success !== undefined) this.launch_success = launch_success;
      if (links !== undefined) this.links = links;
      if (rocket !== undefined) this.rocket = rocket;
    }
  }
  