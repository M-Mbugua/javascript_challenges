let promise = new Promise( (resolve, reject) => {
    setTimeout(( ) => {
       resolve("biscuit")
    }, 850)
  })

  /*Or

  let promise = new Promise((resolve, reject) => 
  setTimeout(resolve, 850, "biscuit")); */