module.exports = (logMark = false) => {
    const M = (logMark == true ? () => {
        if (process.verbose) return '\x1b[34m[' + process.title + " \x1b[33m" + process.hrtime.bigint() + '\x1b[34m]';
        else return '\x1b[34m[' + process.title + ']';
    } : () => {return ""} );

    const m = function() { const h = this; return {
        logNext: function(...args) {return global.log.call({ident: h.ident + "│ "}, h.ident+ "│", ...args, '\x1b[90m')},
        logEnd: function(...args) {return global.log.call({ident: h.ident + "┕ "}, h.ident+ "┕", ...args, '\x1b[90m')},
        verboseNext: function(...args) {return global.verbose.call({ident: h.ident + "│ "}, h.ident+ "│", ...args, '\x1b[90m')},
        verboseEnd: function(...args) {return global.verbose.call({ident: h.ident + "┕ "}, h.ident+ "┕", ...args, '\x1b[90m')},
        errorNext: function(...args) {return global.error.call({ident: h.ident + "│ "}, h.ident+ "│\x1b[31m", ...args, '\x1b[90m')},
        errorEnd: function(...args) {return global.error.call({ident: h.ident + "┕ "}, h.ident+ "┕\x1b[31m", ...args, '\x1b[90m')},
    }}
    global.log = function(...args) { console.log(M() + ' \x1b[37m', ...args);return more.call({ident:(this.ident === undefined ? "" : this.ident)}); };
    global.verbose = function(...args) { if (process.verbose) console.log(M() + ' \x1b[37m', ...args); return more.call({ident:(this.ident === undefined ? "" : this.ident)}); };
    global.error = function(...args) { console.error(M() + ' \x1b[37m', ...args); return more.call({ident:(this.ident === undefined ? "" : this.ident)}); };
}