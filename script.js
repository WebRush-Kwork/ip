let info = new Userinfo();

async function t1() {
  console.log(await info.ip());
}

t1();
