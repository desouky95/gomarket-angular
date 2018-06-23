// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MatInputModule} from '@angular/material/input';
// import { ReactiveFormsModule , FormsModule} from '@angular/forms';
// import { MatFormFieldModule} from '@angular/material';
// import { MatIcon} from '@angular/material';
//
// @NgModule({
//   imports: [
//     CommonModule,
//       MatInputModule,
//       ReactiveFormsModule,
//       FormsModule,
//       MatFormFieldModule,
//       MatIcon
//   ],
//     exports: [
//         MatInputModule,
//         ReactiveFormsModule,
//         FormsModule,
//         MatFormFieldModule,
//         MatIcon
//     ],
//   declarations: []
// })
// export class MaterialModule { }

import { NgModule } from '@angular/core';
import {
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatRadioModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatSlideToggleModule
} from '@angular/material';
@NgModule({
    imports: [
        MatFormFieldModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatSidenavModule,
        MatSortModule,
        MatTableModule,
        MatInputModule,
        MatSelectModule,
        MatSliderModule,
        MatRadioModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatChipsModule,
        MatTooltipModule,
        MatExpansionModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatTabsModule,
        MatSlideToggleModule
    ],
    exports: [
        MatFormFieldModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatSidenavModule,
        MatSortModule,
        MatTableModule,
        MatInputModule,
        MatSelectModule,
        MatSliderModule,
        MatRadioModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatChipsModule,
        MatTooltipModule,
        MatExpansionModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatTabsModule,
        MatSlideToggleModule
    ]
})
export class MaterialModule {}