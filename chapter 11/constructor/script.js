class railwayForm{
    submit(){
        alert (this.name  +"  your form is submit for "+this.trainno);
    }
    cancel(){
        alert(this.name +" your form is cancel for "+this.trainno);
    }
    fillName(givenname,trainno){
        this.name=givenname;
        this.trainno=trainno;
    }

 }
 // create a form for harry
 let harry=new railwayForm;
 // fill the form with harry's detail
//  harry.fillName("harry",98706);

// create a form for sakshi
 let sakshi1=new railwayForm;
 let sakshi2=new railwayForm;
// fill the form with sakshi's detail

// sakshi1.fillName("sakshi",78654);
// sakshi2.fillName("saksh i",98706);
 harry.submit();
 sakshi1.submit();
 sakshi2.submit();
 // suppose hmne ek player class form ki toh hum us me bo methods/functio dale ge jo bo player kr skta h. Isse code ki readability bd jati h.