var canvas = document.getElementById('canvas');
              
/*getContext ile tuval üzerine çizim yapmak için 2d olarak yöntem ve
özellikler sağlayan bir nesne */
 ctx = canvas.getContext('2d');

//Ekran genişiliğine göre sayfanın genişliğini ve yüksekliğini ayarlar
 function resize() {
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
 }
 resize();
 window.onresize = resize;

 
 //White noise efekt oluşturma
 function Whitenoise(ctx) {
     var w = ctx.canvas.width;
     var h = ctx.canvas.height;
               
    
     /*  Belirtien boyutlara sahip yeni bir
         ImageData nesnesi oluşturur.Tüm pikseller
         şeffaf siyah yani rgba(0,0,0,0) olur.
     */
     idata = ctx.createImageData(w, h);
               
    
     buffer32 = new Uint32Array(idata.data.buffer);
     buffer_len = buffer32.length;
    
      
     for ( i = 0 ; i < buffer_len; i++)
         buffer32[i] = ((255 * Math.random()) | 0) << 24;
           
     
     /*  putImageData yöntemi, görüntü verilerini
         belirli bir ImageData nesnesinden sayfaya
         geri koyar
     */
     ctx.putImageData(idata, 0, 0);
 }

 
 // Animasyon efekti
 var toggle = true;
 (function loop() {
     toggle = !toggle;
     if (toggle) {
           
         /*  Döngü işlemi sonraki yeniden boyamadan önce
             önce her seferinde çağırılır.
         */
         requestAnimationFrame(loop);
         return;
     }
 Whitenoise(ctx);
 requestAnimationFrame(loop);
 })();
