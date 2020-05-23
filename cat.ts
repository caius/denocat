console.log(Deno.args);

for (const i in Deno.args) {
  const candidate = Deno.args[i];

  if (candidate == "-") {
    // TODO: read from stdin
    await Deno.copy(Deno.stdin, Deno.stdout);
  } else {
    // File on filesystem!
    const file = await Deno.open(candidate);
    await Deno.copy(file, Deno.stdout);
  }
}
