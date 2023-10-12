// Generated by dts-bundle-generator v8.0.1

export type CLIResponse = {
	props: Props;
	command: Command;
};
/**
 * Given initial props and a CLI, parses the arguments and options and returns the command and props.
 */
export declare function cli(initialProps: InitialProps): Promise<CLIResponse>;
/**
 * This is the main entry point to your CLI and takes the initial run options,
 * parses the proper command, positional arguments, and options, and then
 * calls the command with all arguments and options defined.
 */
export declare function run(initialProps: InitialProps): Promise<void>;
export type CommandTree = {
	[key: string]: Command & {
		subcommands?: CommandTree;
	};
};
/**
 * Builds a tree of commands from the ./commands folder.
 *
 * Subcommands are loaded recursively and added to the `subcommands` property of each parent command.
 *
 * The default command is at key "default" in the root level.
 */
export declare function commandTree(initialProps: InitialProps, subfolder?: string[]): Promise<CommandTree>;
export declare function commandHelp(initialProps: InitialProps): Promise<string>;
export type PrintFunction = {
	(...opts: any[]): void;
	setMocked: (mocked: boolean) => void;
	mocked?: boolean;
	testOutput?: string;
};
export declare const print: PrintFunction;
export declare const write: (text: string) => boolean;
export declare const specialKeys: {
	readonly "\u001B[A": "up";
	readonly "\u001B[B": "down";
	readonly "\u001B[C": "right";
	readonly "\u001B[D": "left";
	readonly "\u0003": "ctrl-c";
	readonly "": "backspace";
	readonly "\u001B": "escape";
	readonly "\u0004": "ctrl-d";
	readonly "\u0005": "ctrl-e";
	readonly "\u0006": "ctrl-f";
	readonly "\u0007": "ctrl-g";
	readonly "\b": "ctrl-h";
	readonly "\v": "ctrl-k";
	readonly "\f": "ctrl-l";
	readonly "\r": "enter";
	readonly "\t": "tab";
	readonly "\n": "enter";
	readonly "\u001B[1~": "home";
	readonly "\u001B[2~": "insert";
	readonly "\u001B[3~": "delete";
	readonly "\u001B[4~": "end";
	readonly "\u001B[5~": "pageup";
	readonly "\u001B[6~": "pagedown";
	readonly "\u001B[7~": "home";
	readonly "\u001B[8~": "end";
	readonly "\u001B[1;5A": "ctrl-up";
	readonly "\u001B[1;5B": "ctrl-down";
	readonly "\u001B[1;5C": "ctrl-right";
	readonly "\u001B[1;5D": "ctrl-left";
	readonly "\u001B[1;2A": "shift-up";
	readonly "\u001B[1;2B": "shift-down";
	readonly "\u001B[1;2C": "shift-right";
	readonly "\u001B[1;2D": "shift-left";
	readonly "\u001B[1;3A": "alt-up";
	readonly "\u001B[1;3B": "alt-down";
	readonly "\u001B[1;3C": "alt-right";
	readonly "\u001B[1;3D": "alt-left";
	readonly "\u001B[1;4A": "alt-shift-up";
	readonly "\u001B[1;4B": "alt-shift-down";
	readonly "\u001B[1;4C": "alt-shift-right";
	readonly "\u001B[1;4D": "alt-shift-left";
};
export declare const styleStart: (style: number) => string;
export declare const styleEnd: (reset: number) => string;
export declare const style: (style: number, reset: number) => (text: string) => string;
export declare const bold: (text: string) => string;
export declare const italic: (text: string) => string;
export declare const underline: (text: string) => string;
export declare const inverse: (text: string) => string;
export declare const colorEnd = "\u001B[0m";
export declare const colorStart: (color: number) => string;
export declare const color: (color: number) => (text: string) => string;
export declare const ansiColors: {
	white: number;
	black: number;
	blue: number;
	cyan: number;
	green: number;
	magenta: number;
	red: number;
	yellow: number;
	grey: number;
	gray: number;
	brightBlack: number;
	brightRed: number;
	brightGreen: number;
	brightYellow: number;
	brightBlue: number;
	brightMagenta: number;
	brightCyan: number;
	brightWhite: number;
};
export declare const white: (text: string) => string;
export declare const black: (text: string) => string;
export declare const blue: (text: string) => string;
export declare const cyan: (text: string) => string;
export declare const green: (text: string) => string;
export declare const magenta: (text: string) => string;
export declare const red: (text: string) => string;
export declare const yellow: (text: string) => string;
export declare const grey: (text: string) => string;
export declare const gray: (text: string) => string;
export declare const brightBlack: (text: string) => string;
export declare const brightRed: (text: string) => string;
export declare const brightGreen: (text: string) => string;
export declare const brightYellow: (text: string) => string;
export declare const brightBlue: (text: string) => string;
export declare const brightMagenta: (text: string) => string;
export declare const brightCyan: (text: string) => string;
export declare const brightWhite: (text: string) => string;
export type AskOptions = {
	validation?: (answer: string) => true | string;
	after?: "preserve" | "clear";
	inputColor?: keyof typeof ansiColors;
};
export type AskFunction = {
	(prompt?: string, askOptions?: AskOptions): Promise<string>;
	mock?: (prompt: string) => Promise<string> | string;
};
export declare const ask: AskFunction;
export type ChooseOptions = {
	style: "horizontal" | "vertical";
	after?: "show-choice" | "preserve" | "clear";
};
export declare function choose(selections: string[], options?: ChooseOptions): Promise<string | undefined>;
export type InputKeyFunction = {
	(): Promise<string>;
	mock?: () => Promise<string> | string;
};
export declare const inputKey: InputKeyFunction;
export type InputKeysFunction = {
	(onKey: (key: string) => Promise<void | false> | void | false): Promise<void>;
	mock?: (onKey: (key: string) => Promise<void | false> | void | false) => Promise<void>;
};
export declare const inputKeys: InputKeysFunction;
/**
 * ANSI escape sequences.
 */
export declare const cursorCodes: {
	readonly up: "A";
	readonly down: "B";
	readonly forward: "C";
	readonly back: "D";
	readonly nextLine: "E";
	readonly previousLine: "F";
	readonly horizontalAbsolute: "G";
	readonly eraseData: "J";
	readonly eraseAfter: "0K";
	readonly eraseBefore: "1K";
	readonly eraseLine: "2K";
	readonly eraseCharacter: "X";
	readonly clearScreen: "2J";
	readonly scrollUp: "S";
	readonly scrollDown: "T";
	readonly enterAlternativeScreen: "?1049h";
	readonly exitAlternativeScreen: "?1049l";
	readonly savePosition: string;
	readonly restorePosition: string;
	readonly goToPosition: (cols: number, rows: number) => string;
	readonly hide: "?25l";
	readonly show: "?25h";
};
/**
 * Moving the cursor around the terminal. Needs testing on Windows.
 */
export declare const cursor: {
	write: (s: string) => any;
	up: (count?: number) => any;
	down: (count?: number) => any;
	forward: (count?: number) => any;
	back: (count?: number) => any;
	moveDown: (count?: number) => any;
	moveUp: (count?: number) => any;
	backToStart: () => any;
	horizontalAbsolute: (count?: number) => any;
	eraseBefore: (count?: number) => any;
	eraseLine: () => any;
	erase: (count?: number) => any;
	clearScreen: () => any;
	scrollUp: (count?: number) => any;
	scrollDown: (count?: number) => any;
	goto: (pos: CursorPos) => any;
	savePosition: () => any;
	restorePosition: () => any;
	hide: () => any;
	show: () => any;
	backspace: (count?: number) => any;
	alternate: (enabled: boolean) => any;
	queryPosition: typeof queryPosition;
	bookmark: (name: string, pos?: CursorPos) => Promise<CursorPos>;
	getBookmark: (name: string) => CursorPos;
	jump: (name: string) => any;
};
export declare function queryPosition(): Promise<CursorPos>;
/**
 * Start a spinner. Returns a Timer object that can be used to stop the spinner.
 */
export declare function spinStart(text: string): Timer;
/**
 * Stop any currently spinning spinner. If no mark is provided, then a checkmark (✓) is used.
 */
export declare function spinStop(mark?: string, text?: string): void;
export declare function progressStart({ length, startValue, bar, empty, fps }: {
	length?: number | undefined;
	startValue?: number | undefined;
	bar?: string | undefined;
	empty?: string | undefined;
	fps?: number | undefined;
}): void;
export declare function progressUpdate(value: number): void;
export declare function progressEnd(action?: "fulfill" | "preserve" | "clear"): void;
/**
 * Returns largest string in an array. Useful for aligning text.
 */
export declare function largest(arr: string[]): string;
/**
 * Recursively crawls a command tree and returns the longest command name.
 * Useful for aligning text in a help message.
 */
export declare function calcWidestCommandName(cmdTree: CommandTree, start?: number): number;
/**
 * Strips ansi codes from a string.
 * Useful for testing.
 */
export declare function stripANSI(str: string): string;
/**
 * Async delay x milliseconds.
 */
export declare function delay(ms: number): Promise<unknown>;
export type Updater = (k: string, newValue: string) => void;
/**
 * This prints a billboard with continually updating information (text).
 *
 * Provide it with a string and it'll respond back with an updater function
 * that lets you update any of the elements.
 *
 * You can designate an element with a 1-letter code wrapped in curly braces,
 * like `{a}` or `{b}`.
 *
 * Minimum length of reactive text is 3 characters.
 *
 * pos is a `{ rows: number, cols: number }` object that tells the billboard
 * where to start printing. It can be offset from the left side of the screen.
 */
export declare function billboard(text: string, pos: CursorPos): Updater;
export interface CursorPos {
	rows: number;
	cols: number;
}
export type InitialProps = {
	/**
	 * This is the name of the CLI. It's used to find the default command.
	 * It's is required.
	 */
	name: string;
	/**
	 * This is the path to the directory where the ./commands folder is.
	 * It is required, because we have no other way to infer it.
	 *
	 * It's usually `__dirname + "/cli"`
	 */
	cliPath: string;
	/**
	 * Usually process.argv, but can be changed for testing.
	 */
	argv?: string[];
};
export type Props = {
	name: string;
	cliPath: string;
	argv: string[];
	commandPath?: string[];
	arguments?: string[];
	options: {
		[key: string]: string | boolean;
	};
	first?: string;
	second?: string;
	third?: string;
};
export type Command = {
	name: string;
	description: string;
	run: (props: Props) => Promise<void>;
	alias?: string | string[];
};

export {};
