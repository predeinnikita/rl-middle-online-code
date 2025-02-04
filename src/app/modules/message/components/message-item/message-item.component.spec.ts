import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideMockStore } from '@ngrx/store/testing'

import { MessageItemComponent } from './message-item.component'

describe('MessageItemComponent', () => {
    let component: MessageItemComponent
    let fixture: ComponentFixture<MessageItemComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MessageItemComponent],
            providers: [
                provideMockStore()
            ]
        })
            .compileComponents()

        fixture = TestBed.createComponent(MessageItemComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
