import { Component , signal} from '@angular/core';
import { TextContent } from '../../components/text-content/text-content';
import { DownloadCard } from '../../components/download-card/download-card';
import { Observer } from "../../hooks/observer";
@Component({
  selector: 'app-download',
  imports: [TextContent, DownloadCard, Observer],
  templateUrl: './download.html',
  styleUrl: './download.scss'
})

export class Download {
  browsers =  <Browser[]>([
    {
      image:'/Images/logo-chrome.svg',
      title: 'Add to Chrome',
      version: 'Minimum version 62',
    },
    {
      image:'/Images/logo-firefox.svg',
      title: 'Add to Firefox',
      version: 'Minimum version 55',
    },
    {
      image:'/Images/logo-opera.svg',
      title: 'Add to Opera',
      version: 'Minimum version 46',
    }
  ])
  }
 export interface Browser {
    image: string;
    title: string;
    version: string;
  }
