import { TestBed, inject } from '@angular/core/testing';

import { TestBedService } from './test-bed.service';
import { WithDeptsService } from './with-depts.service';

describe('TestBedService1', () => {

  let service: TestBedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestBedService]
    });
  });

  it('should use TestBedService', () => {
    service = TestBed.get(TestBedService);
    expect(service.getValue()).toBe('real value');
  });

/*   it('should be created', inject([TestBedService], (service: TestBedService) => {
    expect(service).toBeTruthy();
  })); */
});

describe('TestBedService2', () => {
  let service: TestBedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestBedService]
    });
    service = TestBed.get(TestBedService);
  });

  it('should use TestBedService', () => {
    expect(service.getValue()).toBe('real value');
  });
});

describe('TestBedService3', () => {

  let withDeptsService: WithDeptsService;
  let testBedServiceSpy: jasmine.SpyObj<TestBedService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('TestBedService', ['getValue']);

    TestBed.configureTestingModule({
      // Provide both the service-to-test and its (spy) dependency
      providers: [
        WithDeptsService,
        { provide: TestBedService, useValue: spy }
      ]
    });
    // Inject both the service-to-test and its (spy) dependency
    withDeptsService = TestBed.get(WithDeptsService);
    testBedServiceSpy = TestBed.get(TestBedService);
  });

  it('#getValue should return stubbed value from a spy', () => {
    const stubValue = 'stub value';
    testBedServiceSpy.getValue.and.returnValue(stubValue);

    expect(withDeptsService.getValue()).toBe(stubValue, 'service returned stub value');
    expect(testBedServiceSpy.getValue.calls.count()).toBe(1, 'spy method was called once');
    expect(testBedServiceSpy.getValue.calls.mostRecent().returnValue).toBe(stubValue);
  });


});
