import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: "exec",
  options: { isDefault: true }
})
export class TaskRunner extends CommandRunner {
  run(passedParams: string[], options?: Record<string, any>): Promise<void> {
    const random = Math.floor(Math.random() * 3);
    const shouldCrash = random === 2;

    console.log("Hello from nest-commander !", { passedParams, options, SANDBOX_VAR: process.env.SANDBOX_VAR });
    console.log(shouldCrash ? "You are TERMINATED" : "Systems are functionning normally");
    if (shouldCrash)
      process.exit(1337);

    return;
  }
}
