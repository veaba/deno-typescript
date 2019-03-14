
/**
 * @1 为了不让编辑器报红，这里做了下声明，thisJSON是 deno 环境下，console(this)的结果
 * @2 改写[Function:xx] --> [Function,xx]
 */

declare var env:string,
exit:Function,
isTTY:Function,
chdir:Function,
cwd:Function,
seek:Function,
AsyncFunction:Function,
read:Function,
write:Function,
copy:Function,
toAsyncIterator:Function,
Buffer:Function,
readAll:Function,
mkdirSync :Function,
mkdir :Function,
makeTempDirSync:Function,
makeTempDir :Function,
chmodSync:Function,
chmod:Function,
removeSync:Function,
remove:Function,
renameSync:Function,
rename:Function,
readFileSync:Function,
readFileSync:Function,
readFile:Function,
readDirSync:Function,
readDir:Function,
copyFileSync:Function,
copyFile:Function,
readlinkSync:Function,
readlink:Function,
statSync:Function,
lstatSync:Function,
stat:Function,
lstat:Function,
symlinkSync:Function,
symlink:Function,
writeFileSync:Function,
writeFile:Function,
DenoError:Function,
Circular:Function,
permissions:Function,
revokePermission:Function,
truncateSync:Function,
truncate:Function,
connect:Function,
dial:Function,
listen:Function,
metrics:Function,
resources:Function,
run:Function,
Process:Function,
inspect:Function,
stringifyArgs:Function,
DomIterableMixin:Function,
denoMain:Function,
clearTimer:Function,
CustomEventInit:Function,
EventInit:Function,
DenoBlob:Function,
workerMain:Function
;
const thisJSON ={
        libdeno: {
            print: [Function],
            recv: [Function],
            send: [Function],
            evalContext: [Function],
            errorToJSON: [Function],
            shared: undefined,
            builtinModules: {
                deno: {
                    args: [Array],
                    noColor: false,
                    pid: 16314,
                    env: [Function,env],
                    exit: [Function,exit],
                    isTTY: [Function,isTTY],
                    execPath: "/home/binary/deno",
                    chdir: [Function,chdir],
                    cwd: [Function,cwd],
                    File: [Function,File],
                    open: [AsyncFunction,open],
                    stdin: [Object],
                    stdout: [Object],
                    stderr: [Object],
                    read: [AsyncFunction,read],
                    write: [AsyncFunction,write],
                    seek: [AsyncFunction,seek],
                    close: [Function,close],
                    copy: [AsyncFunction,copy],
                    toAsyncIterator: [Function,toAsyncIterator],
                    SeekMode: [Object],
                    Buffer: [Function,Buffer],
                    readAll: [AsyncFunction,readAll],
                    mkdirSync: [Function,mkdirSync],
                    mkdir: [AsyncFunction,mkdir],
                    makeTempDirSync: [Function,makeTempDirSync],
                    makeTempDir: [AsyncFunction, makeTempDir],
                    chmodSync: [Function,chmodSync],
                    chmod: [AsyncFunction, chmod],
                    removeSync: [Function,removeSync],
                    remove: [AsyncFunction, remove],
                    renameSync: [Function,renameSync],
                    rename: [AsyncFunction, rename],
                    readFileSync: [Function,readFileSync],
                    readFile: [AsyncFunction, readFile],
                    readDirSync: [Function,readDirSync],
                    readDir: [AsyncFunction, readDir],
                    copyFileSync: [Function,copyFileSync],
                    copyFile: [AsyncFunction, copyFile],
                    readlinkSync: [Function,readlinkSync],
                    readlink: [AsyncFunction, readlink],
                    statSync: [Function,statSync],
                    lstatSync: [Function,lstatSync],
                    stat: [AsyncFunction, stat],
                    lstat: [AsyncFunction, lstat],
                    symlinkSync: [Function,symlinkSync],
                    symlink: [AsyncFunction, symlink],
                    writeFileSync: [Function,writeFileSync],
                    writeFile: [AsyncFunction, writeFile],
                    ErrorKind: [Object],
                    DenoError: [Function,DenoError],
                    libdeno: [Circular],
                    permissions: [Function,permissions],
                    revokePermission: [Function,revokePermission],
                    truncateSync: [Function,truncateSync],
                    truncate: [AsyncFunction, truncate],
                    connect: [AsyncFunction, connect],
                    dial: [AsyncFunction, dial],
                    listen: [Function,listen],
                    metrics: [Function,metrics],
                    resources: [Function,resources],
                    run: [Function,run],
                    Process: [Function,Process],
                    inspect: [Function,inspect],
                    build: [Object],
                    platform: [Object],
                    version: [Object],
                    Console: [Function,Console],
                    stringifyArgs: [Function,stringifyArgs],
                    DomIterableMixin: [Function,DomIterableMixin]
                }
            }
        },
        denoMain: [Function,denoMain],
        window: [Circular],
        Deno: {
            args: [],
            noColor: false,
            pid: 16314,
            env: [Function,env],
            exit: [Function,exit],
            isTTY: [Function,isTTY],
            execPath: "/home/binary/deno",
            chdir: [Function,chdir],
            cwd: [Function,cwd],
            File: [Function,File],
            open: [AsyncFunction,open],
            stdin:{ File:{
                rid: 0
            }},
            stdout: {File:{
                rid: 1
            }},
            stderr: {File:{
                rid: 2
            }},
            read: [AsyncFunction, read],
            write: [AsyncFunction, write],
            seek: [AsyncFunction, seek],
            close: [Function,close],
            copy: [AsyncFunction, copy],
            toAsyncIterator: [Function,toAsyncIterator],
            SeekMode: {
                0: "SEEK_START",
                1: "SEEK_CURRENT",
                2: "SEEK_END",
                SEEK_START: 0,
                SEEK_CURRENT: 1,
                SEEK_END: 2
            },
            Buffer: [Function,Buffer],
            readAll: [AsyncFunction, readAll],
            mkdirSync: [Function,mkdirSync],
            mkdir: [AsyncFunction, mkdir],
            makeTempDirSync: [Function,makeTempDirSync],
            makeTempDir: [AsyncFunction, makeTempDir],
            chmodSync: [Function,chmodSync],
            chmod: [AsyncFunction, chmod],
            removeSync: [Function,removeSync],
            remove: [AsyncFunction, remove],
            renameSync: [Function,renameSync],
            rename: [AsyncFunction, rename],
            readFileSync: [Function,readFileSync],
            readFile: [AsyncFunction, readFile],
            readDirSync: [Function,readDirSync],
            readDir: [AsyncFunction, readDir],
            copyFileSync: [Function,copyFileSync],
            copyFile: [AsyncFunction, copyFile],
            readlinkSync: [Function,readlinkSync],
            readlink: [AsyncFunction, readlink],
            statSync: [Function,statSync],
            lstatSync: [Function,lstatSync],
            stat: [AsyncFunction, stat],
            lstat: [AsyncFunction, lstat],
            symlinkSync: [Function,symlinkSync],
            symlink: [AsyncFunction, symlink],
            writeFileSync: [Function,writeFileSync],
            writeFile: [AsyncFunction, writeFile],
            ErrorKind: {
                0: "NoError",
                1: "NotFound",
                2: "PermissionDenied",
                3: "ConnectionRefused",
                4: "ConnectionReset",
                5: "ConnectionAborted",
                6: "NotConnected",
                7: "AddrInUse",
                8: "AddrNotAvailable",
                9: "BrokenPipe",
                10: "AlreadyExists",
                11: "WouldBlock",
                12: "InvalidInput",
                13: "InvalidData",
                14: "TimedOut",
                15: "Interrupted",
                16: "WriteZero",
                17: "Other",
                18: "UnexpectedEof",
                19: "BadResource",
                20: "CommandFailed",
                21: "EmptyHost",
                22: "IdnaError",
                23: "InvalidPort",
                24: "InvalidIpv4Address",
                25: "InvalidIpv6Address",
                26: "InvalidDomainCharacter",
                27: "RelativeUrlWithoutBase",
                28: "RelativeUrlWithCannotBeABaseBase",
                29: "SetHostOnCannotBeABaseUrl",
                30: "Overflow",
                31: "HttpUser",
                32: "HttpClosed",
                33: "HttpCanceled",
                34: "HttpParse",
                35: "HttpOther",
                36: "TooLarge",
                37: "InvalidUri",
                38: "InvalidSeekMode",
                NoError: 0,
                NotFound: 1,
                PermissionDenied: 2,
                ConnectionRefused: 3,
                ConnectionReset: 4,
                ConnectionAborted: 5,
                NotConnected: 6,
                AddrInUse: 7,
                AddrNotAvailable: 8,
                BrokenPipe: 9,
                AlreadyExists: 10,
                WouldBlock: 11,
                InvalidInput: 12,
                InvalidData: 13,
                TimedOut: 14,
                Interrupted: 15,
                WriteZero: 16,
                Other: 17,
                UnexpectedEof: 18,
                BadResource: 19,
                CommandFailed: 20,
                EmptyHost: 21,
                IdnaError: 22,
                InvalidPort: 23,
                InvalidIpv4Address: 24,
                InvalidIpv6Address: 25,
                InvalidDomainCharacter: 26,
                RelativeUrlWithoutBase: 27,
                RelativeUrlWithCannotBeABaseBase: 28,
                SetHostOnCannotBeABaseUrl: 29,
                Overflow: 30,
                HttpUser: 31,
                HttpClosed: 32,
                HttpCanceled: 33,
                HttpParse: 34,
                HttpOther: 35,
                TooLarge: 36,
                InvalidUri: 37,
                InvalidSeekMode: 38
            },
            DenoError: [Function,DenoError],
            libdeno: {
                print: [Function],
                recv: [Function],
                send: [Function],
                evalContext: [Function],
                errorToJSON: [Function],
                shared: undefined,
                builtinModules: {
                    deno: [Circular]
                }
            },
            permissions: [Function,permissions],
            revokePermission: [Function,revokePermission],
            truncateSync: [Function,truncateSync],
            truncate: [AsyncFunction, truncate],
            connect: [AsyncFunction, connect],
            dial: [AsyncFunction, dial],
            listen: [Function,listen],
            metrics: [Function,metrics],
            resources: [Function,resources],
            run: [Function,run],
            Process: [Function,Process],
            inspect: [Function,inspect],
            build: {
                arch: "x64",
                os: "linux",
                gnArgs: `
                cc_wrapper =  / home / travis / build / denoland / deno / prebuilt / linux64 / sccache 
                clang_use_chrome_plugins = false
                is_cfi = false
                is_component_build = false
                is_debug = true
                is_desktop_linux = false
                proprietary_codecs = false
                rust_treat_warnings_as_errors = true
                rustc_wrapper = "/home/travis/build/denoland/deno/prebuilt/linux64/sccache"
                safe_browsing_mode = 0
                symbol_level = 1
                toolkit_views = false
                treat_warnings_as_errors = true
                use_aura = false
                use_dbus = false
                use_gio = false
                use_glib = false
                use_jumbo_build = true
                use_ozone = false
                use_udev = false
                v8_deprecation_warnings = false
                v8_enable_gdbjit = false
                v8_enable_i18n_support = false
                v8_extra_library_files = []
                v8_imminent_deprecation_warnings = false
                v8_monolithic = false
                v8_postmortem_support = true
                v8_untrusted_code_mitigations = false
                v8_use_external_startup_data = false
                v8_use_snapshot = true "
                }`, 
                platform: { 
                    arch: "x64 ", 
                    os: "linux ", 
                    gnArgs: `"cc_wrapper = "/home/travis/build/denoland/deno/prebuilt/linux64/sccache"
                            clang_use_chrome_plugins = false
                            is_cfi = false
                            is_component_build = false
                            is_debug = true
                            is_desktop_linux = false
                            proprietary_codecs = false
                            rust_treat_warnings_as_errors = true
                            rustc_wrapper = "/home/travis/build/denoland/deno/prebuilt/linux64/sccache"
                            safe_browsing_mode = 0
                            symbol_level = 1
                            toolkit_views = false
                            treat_warnings_as_errors = true
                            use_aura = false
                            use_dbus = false
                            use_gio = false
                            use_glib = false
                            use_jumbo_build = true
                            use_ozone = false
                            use_udev = false
                            v8_deprecation_warnings = false
                            v8_enable_gdbjit = false
                            v8_enable_i18n_support = false
                            v8_extra_library_files = []
                            v8_imminent_deprecation_warnings = false
                            v8_monolithic = falsev8_postmortem_support = true 
                            v8_untrusted_code_mitigations = false 
                            v8_use_external_startup_data = false 
                            v8_use_snapshot = true `
                }, 
                version: { 
                    deno: "0.3 .2 ", 
                    v8: "7.4 .238 ", 
                    typescript: "3.2 .1 " }, 
                Console: [Function,Console], 
                stringifyArgs: [Function,stringifyArgs], 
                DomIterableMixin: [Function,DomIterableMixin] }, 
                atob: [Function,atob], 
                btoa: [Function,btoa], 
                fetch: [AsyncFunction, fetch], 
                clearTimeout: [Function,clearTimer], 
                clearInterval: [Function,clearTimer], 
                setTimeout: [Function,setTimeout],
                setInterval: [Function,setInterval], 
                location: undefined, 
                Blob: [Function,DenoBlob], 
                CustomEventInit: [Function,CustomEventInit],
                CustomEvent: [Function,CustomEvent], 
                EventInit: [Function,EventInit], 
                Event: [Function,Event], 
                EventTarget: [Function,EventTarget], 
                URL: [Function,URL], 
                URLSearchParams: [Function,URLSearchParams], 
                Headers: [Function,Headers], 
                FormData: [Function,FormData], 
                TextEncoder: [Function,TextEncoder], 
                TextDecoder: [Function,TextDecoder], 
                performance: {
                    Performance:{ 
                        timeOrigin: 1551926516634 
                    }
                }, 
                workerMain: [AsyncFunction, workerMain] 
                }
            }

    