async function a1() {
  return 13423
}

async function a() {
  return  await a1()
}

a().then((r)=> {
  console.log(r)
})
