import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { MatTableDataSource } from '@angular/material/table';
import { EntryElement } from '../interfaces/EntryElement';
import { MatDialog } from '@angular/material/dialog';
import { UpdateEntryComponent } from '../update-entry/update-entry.component';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {
  displayedColumns: string[]=['Description', 'IsExpense','Value','Actions'];
  dataSource;

  constructor(private service:EntryService, private dialog:MatDialog ) { }

  ngOnInit() {
this.service.getAll().subscribe((data)=>{
  console.log('Result - ', data);
  this.dataSource= new MatTableDataSource<EntryElement>(data as EntryElement[]);
})

  }
updateEntry(entry)
{
  console.log(entry);
  this.dialog.open(UpdateEntryComponent,{
    data:{
      Description:entry.Description,
      isExpense:entry.isExpense,
      value:entry.Value

    }})
}
}
