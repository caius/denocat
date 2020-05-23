var exitCode = 0;

async function handleStdin() {
  await Deno.copy(Deno.stdin, Deno.stdout);
}

// No arguments, copy stdin then exit
if (Deno.args.length == 0) {
  await handleStdin();
  Deno.exit(exitCode);
}

// Any arguments get copied
for (const i in Deno.args) {
  const candidate = Deno.args[i];

  // "-" is special, means stdin
  if (candidate == "-") {
    await handleStdin();
  } else {
    // Attempt to copy path on filesystem
    const file = await Deno.open(candidate);
    await Deno.copy(file, Deno.stdout);
    file.close();
  }
}

Deno.exit(exitCode);
