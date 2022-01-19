beeps = process.argv.slice(2);
for (const beep of beeps) {
  if (Number(beep) >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(beep) * 1000);
  }
}