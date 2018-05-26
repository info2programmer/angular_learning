import { Directive, ElementRef, HostListener, Host } from '@angular/core';

@Directive({
  selector: '[blueColor]'
})
export class BlueColorDirective {

  constructor(element: ElementRef) {
    console.log(element);
    element.nativeElement.style.color="blue";
  }

  // @HostListener('click') doSomething()
  // {
  //   alert('Its Work');
  // }

  // @HostListener('mouseenter') doSomethingElse(){
  //   // element.nativeElement.style.color="red";
  //   console.log('Mouse Enter');
  // }
  // @HostListener('mouseleave') doSomethingElseElse(){
  //   // element.nativeElement.style.color="green";
  //   console.log('Mouse Leave');
  // }
  

  // More About HostListener
  @HostListener('mouseenter',['$event']) doSomething(elem){
    // elem.nativeElement.style.color="green";
    // console.log(elem.path[0]);
    elem.path[0].style.color="red";
  }

  @HostListener('mouseleave',['$event']) doSomethingElse(elem){
    //elem.nativeElement.style.color="blue";
    elem.path[0].style.color="blue";
  }

}
