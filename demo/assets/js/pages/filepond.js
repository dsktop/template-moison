FilePond.create(document.querySelector(".basic-filepond"),{credits:null,allowImagePreview:!1,allowMultiple:!1,allowFileEncode:!1,required:!1}),FilePond.create(document.querySelector(".multiple-files-filepond"),{credits:null,allowImagePreview:!1,allowMultiple:!0,allowFileEncode:!1,required:!1}),FilePond.create(document.querySelector(".with-validation-filepond"),{credits:null,allowImagePreview:!1,allowMultiple:!0,allowFileEncode:!1,required:!0,acceptedFileTypes:["image/png"],fileValidateTypeDetectType:(e,l)=>new Promise(((e,i)=>{e(l)}))}),FilePond.create(document.querySelector(".imgbb-filepond"),{credits:null,allowImagePreview:!1,server:{process:(e,l,i,a,o,t,r)=>{const n=new FormData;n.append(e,l,l.name);const g=new XMLHttpRequest;g.open("POST","https://api.imgbb.com/1/upload?key=762894e2014f83c023b233b2f10395e2"),g.upload.onprogress=e=>{t(e.lengthComputable,e.loaded,e.total)},g.onload=function(){g.status>=200&&g.status<300?a(g.responseText):o("oh no")},g.onreadystatechange=function(){if(4==this.readyState)if(200==this.status){let e=JSON.parse(this.responseText);Toastify({text:"Success uploading to imgbb! see console f12",duration:3e3,close:!0,gravity:"bottom",position:"right",backgroundColor:"#4fbe87"}).showToast(),console.log(e)}else Toastify({text:"Failed uploading to imgbb! see console f12",duration:3e3,close:!0,gravity:"bottom",position:"right",backgroundColor:"#ff0000"}).showToast(),console.log("Error",this.statusText)},g.send(n)}}}),FilePond.create(document.querySelector(".image-preview-filepond"),{credits:null,allowImagePreview:!0,allowImageFilter:!1,allowImageExifOrientation:!1,allowImageCrop:!1,acceptedFileTypes:["image/png","image/jpg","image/jpeg"],fileValidateTypeDetectType:(e,l)=>new Promise(((e,i)=>{e(l)}))}),FilePond.create(document.querySelector(".image-crop-filepond"),{credits:null,allowImagePreview:!0,allowImageFilter:!1,allowImageExifOrientation:!1,allowImageCrop:!0,acceptedFileTypes:["image/png","image/jpg","image/jpeg"],fileValidateTypeDetectType:(e,l)=>new Promise(((e,i)=>{e(l)}))}),FilePond.create(document.querySelector(".image-exif-filepond"),{credits:null,allowImagePreview:!0,allowImageFilter:!1,allowImageExifOrientation:!0,allowImageCrop:!1,acceptedFileTypes:["image/png","image/jpg","image/jpeg"],fileValidateTypeDetectType:(e,l)=>new Promise(((e,i)=>{e(l)}))}),FilePond.create(document.querySelector(".image-filter-filepond"),{credits:null,allowImagePreview:!0,allowImageFilter:!0,allowImageExifOrientation:!1,allowImageCrop:!1,imageFilterColorMatrix:[.299,.587,.114,0,0,.299,.587,.114,0,0,.299,.587,.114,0,0,0,0,0,1,0],acceptedFileTypes:["image/png","image/jpg","image/jpeg"],fileValidateTypeDetectType:(e,l)=>new Promise(((e,i)=>{e(l)}))}),FilePond.create(document.querySelector(".image-resize-filepond"),{credits:null,allowImagePreview:!0,allowImageFilter:!1,allowImageExifOrientation:!1,allowImageCrop:!1,allowImageResize:!0,imageResizeTargetWidth:200,imageResizeTargetHeight:200,imageResizeMode:"cover",imageResizeUpscale:!0,acceptedFileTypes:["image/png","image/jpg","image/jpeg"],fileValidateTypeDetectType:(e,l)=>new Promise(((e,i)=>{e(l)}))});
