import { Component, OnInit } from '@angular/core';
import { Solution } from '../../modals/solutions';


@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {

  public solutionList: Array<Solution> = [
    new Solution(
      'MOBILE ADVERTISEMENT',
      ['Banner & Video']
    ),
    new Solution(
      'USER ACQUISITION',
      ['Targeting', 'Retargeting', 'Application Install', 'Activations']
    ),
    new Solution(
      'SOCIAL MEDIA INFLUENCERS',
      ['Brand Endorsements on Social Media Platforms – Facebook, Twitter, Instagram etc from celebrity Fan Page', 'Bloggers & more']
    ),
    new Solution(
      'IN-FLIM & WEB-SERIES',
      ['Brand Sponsorships', 'In-flim branding', 'Web series that shows influence of brands exclusively']
    ),
    new Solution(
      'OEM SOLUTIONS',
      ['Mobile Embeds', 'App Install (OTA & FOTA)', 'Retargeting Solutions']
    ),
    new Solution(
      'DIGITAL MARKETING',
      ['Social Media', 'Website Development', 'SEO', 'Creative Design']
    )
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
