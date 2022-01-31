import  pida from  'pida'
import "@picocss/pico/css/pico.min.css"
pida.onDomReady(()=>{
    console.dir(pida.$("a").length)
     pida.addListener(pida.$("a"),"click",(evt)=>{
         console.log(evt.target);
     })
    pida.each(pida.$("a"),(item)=>{
        console.log(item);
    })
    console.dir(pida)
})