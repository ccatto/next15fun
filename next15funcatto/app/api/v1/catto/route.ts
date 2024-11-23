// GET app/api/v1/catto

export async function GET(request: Request) {
  return new Response('Hello Catto, Next.js 15!');
}

// POST app/api/v1/catto
export async function POST(request: Request, props: { params: Promise<any> }) {
  console.log(' POST app/api/v1/catto ---------------------');
  const params = await props.params;

  return new Response('Hello Catto, Next.js 15!', params);
    // return NextResponse.json({ message: 'Posted data team table yo!' });

  // #todo add some logic to check if data is good;
}


// // POST app/api/v1/catto
// export async function POST(request: Request) {
//   console.log("inside post POST app/api/v1/catto");
//   const formData = await request.formData();
//   const name = formData.get('name');
//   const email = formData.get('email');
//   return Response.json({ name, email });
//   // const res = await request.json();
//   // console.log('res === ', res);
//   // return Response.json({ res });
// }