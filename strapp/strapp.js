// miliseconds to wait until updating ouput
var c = {};	// constants
var e = {}; 	// DOM objects
var g = {};	// other global vars

c.INPUT_TIMEOUT_DEFAULT = 500;
g.inputTimeout = c.INPUT_TIMEOUT_DEFAULT;

g.procs = {

	// converts text to fullwidth
	"Fullwidth": {
		args: false,
		argP: "",
		func: function(text) {
			var str = "";
			for (var i = 0; i < text.length; ++i) {
				var chr = text.charAt(i);
				var ord = chr.charCodeAt(0);
				if (ord >= 33 && ord <= 126) {
					str += String.fromCharCode(ord + 65248);
				} else if (ord == 32) {
					str += '\u2003';
				} else {
					str += chr;
				}
			}
			return str;
		}
	},

	// creates a C-style array string
	"C-Style Array": {
		args: true,
		argP: "...delimiter...",
		func: function(text, delimiter) {
			if (text === '') return "{ }"
			var trm = sanitize(text).split(sanitize(delimiter));
			var arr = "{ ";
			for (var i = 0; i < trm.length; ++i) {
				arr += '"' + trm[i].replace(/\\/g,"\\\\").replace(/"/g,"\\\"");
				arr += (i < trm.length - 1) ? "\", " : "\"";
			}
			return arr + " }";
		}
	},

	"ALL CAPS": {
		args: false,
		argP: "",
		func: function(text) {
			return sanitize(text).toUpperCase();
		}
	},

	"all lowercase": {
		args: false,
		argP: "",
		func: function(text) {
			return sanitize(text).toLowerCase();
		}
	}
}

// listener callback
function updateOutput() {
	g.textInputLastChanged = new Date().getTime();

	// show typing icon
	e.throbber.style.display = "block";

	setTimeout(
		function() {
			if (new Date().getTime() - g.textInputLastChanged >= g.inputTimeout) {
				var text = e.textInput.value;

				// process output
				var opt = e.outputOpt.options[e.outputOpt.selectedIndex].text;
				e.optionArg.placeholder = g.procs[opt].argP;
				if (g.procs[opt].args) {
					e.textOutput.innerHTML = g.procs[opt].func(text, e.optionArg.value);
				} else {
					e.textOutput.innerHTML = g.procs[opt].func(text);
				}

				// process text stats
				var stats = textStats(text);
				e.charCount.innerHTML = stats.chars;
				e.wordCount.innerHTML = stats.words;
				e.lineCount.innerHTML = stats.lines;

				// hide typing icon
				e.throbber.style.display = "none";
			}
			g.inputTimeout = c.INPUT_TIMEOUT_DEFAULT;
		}
	, g.inputTimeout);
}

function instantUpdate() {
	g.inputTimeout = 0;
    e.optionArg.value = "";
	updateOutput();
}

function sanitize(text) {
	return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function textStats(text) {
	if (text === '') {
		return { chars: 0, words: 0, lines:0 };
	} else {
		return {
			chars: text.length,
			words: text.trim().replace(/\s+/g, ' ').split(' ').length,
			lines: text.split('\n').length,
		};
	}
}

window.onload = function() {
	e.textInput = document.getElementById("textInput");
	e.lineCount = document.getElementById("lineCount");
	e.wordCount = document.getElementById("wordCount");
	e.charCount = document.getElementById("charCount");
	e.outputOpt = document.getElementById("outputOpt");
	e.optionArg = document.getElementById("optionArg");
	e.textOutput = document.getElementById("textOutput");
	e.throbber = document.getElementById("throbber");
	e.textInput.addEventListener("input", updateOutput);
	e.outputOpt.addEventListener("change", instantUpdate);
	e.optionArg.addEventListener("input", updateOutput);

	// add text processing options
	var option;
	for (proc in g.procs) {
		option = document.createElement("option");
		option.text = proc;
		e.outputOpt.add(option);
	}
}
