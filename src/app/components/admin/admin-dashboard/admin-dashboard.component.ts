import { SummaryService } from './../../../services/summary/summary.service';
import { Component, OnInit } from '@angular/core';
import { Summary } from 'src/app/models/summary';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  summary: Summary;

  constructor(private summaryService : SummaryService) { }

  ngOnInit(): void {
    this.getSummary()
  }

  getSummary(){
    this.summaryService.getSummary().subscribe({
      next : summary=>{
        this.summary =summary;
      }
    })
  }

}
