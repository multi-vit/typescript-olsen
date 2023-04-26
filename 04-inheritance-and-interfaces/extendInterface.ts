// You can define an interface that extends another interface
// Very powerful - enables you to specialise an interface
// Similar to class inheritance but with interfaces

interface Command {
  execute(): void;
}

// Inherits the execute() function from above interface
// Adds another function to it without modifying the above interface
interface UndoableCommand extends Command {
  undo(): void;
}

// You can use either interface anywhere:

function f1(command: Command) {
  command.execute();
}

function f2(undoableCommand: UndoableCommand) {
  undoableCommand.execute();
  undoableCommand.undo();
}
