class railwayForm{
    constructor(givenname,trainno){
        this.name=givenname;
        this.trainno=trainno;
        console.log("This is givenname "+givenname)
        console.log("this  is trainno "+trainno)
    }
    submit(){
        alert (this.name  +"  your form is submit for "+this.trainno);
    }
    cancel(){
        alert(this.name +" your form is cancel for "+this.trainno);
    }
    
}
let sakshiform=new railwayForm("sakshi",23450)
sakshiform.submit(); 