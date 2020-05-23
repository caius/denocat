if (Deno.args.length == 0) {
  await Deno.copy(Deno.stdin, Deno.stdout);
  Deno.exit(0);
}

for (const i in Deno.args) {
  const candidate = Deno.args[i];

  if (candidate == "-") {
    await Deno.copy(Deno.stdin, Deno.stdout);
  } else {
    // File on filesystem!
    const file = await Deno.open(candidate);
    await Deno.copy(file, Deno.stdout);
  }
}

Deno.exit(0);
