function head1(){
    let xy = document.getElementById("hd2ii")
    xy.style.backgroundColor = "rgb(62, 115, 230,0.7)"
    xy.style.borderTopLeftRadius = "5px"
    xy.style.borderTopRightRadius ="5px"
    let ra = document.getElementById("hd2i")
    ra.style.background = "none"
    let mm = document.getElementById("fhd2")
    mm.style.display = "block"
    let fi = document.getElementById("fhd1")
    fi.style.display = "none"
}
function head2(){
    let xy = document.getElementById("hd2i")
    xy.style.backgroundColor = "rgb(62, 115, 230,0.7)"
    xy.style.borderTopLeftRadius = "5px"
    xy.style.borderTopRightRadius ="5px"
    let ra = document.getElementById("hd2ii")
    ra.style.background = "none"
    let mm = document.getElementById("fhd1")
    mm.style.display = "block"
    let fi = document.getElementById("fhd2")
    fi.style.display = "none"
}
console.log("commented")

 const form = document.getElementById("fhd1")
 const errorDisplay = document.getElementById("errordata")
 form.addEventListener("submit", function(xy){
 xy.preventDefault()
const fhd1i = form.fhd1i.value
const fhd1ii = form.fhd1ii.value
const fhd1iii = form.fhdiii.value
const df1= form.df1.value
 const df2 = form.df2.value
 const df3 = form.df3.value
 const df4 = form.df4.value

  if(fhd1i ===""|| fhd1ii ===""|| fhd1iii ===""){
      errorDisplay.textContent = "fields cannot be empty"
      return;
  }
 if(df1===""|| df2===""|| df3===""|| df4===""){
     errorDisplay.textContent = "fields cannot be empty"
     return;
}
})

function pay(){
    let xy = document.getElementById("rlist")
    xy.style.display = "block"
    let cc = document.getElementById("srnav")
    cc.style.display = "block"
    let br = document.getElementById("rnav")
    br.style.display = "none"
}

function cod(){
    let xy = document.getElementById("rlist")
    xy.style.display = "none"
    let br = document.getElementById("srnav")
    br.style.display = "none"
    let hh = document.getElementById("rnav")
    hh.style.display ="block"
}






