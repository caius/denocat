console.log(Deno.args);

for (const i in Deno.args) {
  const candidate = Deno.args[i];

  if (candidate == "-") {
    // TODO: read from stdin
  } else {
    // File on filesystem!
    const file = await Deno.open(candidate);
    Deno.copy(file, Deno.stdout);
  }
}
