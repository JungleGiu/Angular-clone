import { Component , signal } from '@angular/core';
import { TextContent } from '../../components/text-content/text-content';
import { FeaturesNav } from '../../components/features-nav/features-nav';
import { FeaturesCard } from '../../components/features-card/features-card';
@Component({
  selector: 'app-features',
  imports: [TextContent, FeaturesNav, FeaturesCard],
  templateUrl: './features.html',
  styleUrl: './features.scss'
})
export class Features {
  cardNumber = signal<number>(1)
  prevCardNumber = signal(1)

  cards = signal<FeaturesDetails[]>([
{
  id: 1,
  image: '/Images/illustration-features-tab-1.svg',
  navTitle: 'Simple Bookmarking',
  title: 'Bookmark in one click',
  description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
  buttonText: 'More info'
},
{
  id: 2,
  image: '/Images/illustration-features-tab-2.svg',
  navTitle: 'Speedy Searching',
  title: 'Intelligent search',
  description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
  buttonText: 'More info'
},
{
  id: 3,
  image: '/Images/illustration-features-tab-3.svg',
  navTitle: 'Easy Sharing',
  title: 'Share your bookmarks',
  description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
  buttonText: 'More info'
}  
])
}
export interface FeaturesDetails {
  id : number;
  image: string;
  title: string;
  navTitle: string;
  description: string;
  buttonText: string;
}

