let cacheData = "APP";

this.addEventListener("install",(e)=>{
    e.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                
            ])
        })
    )
})