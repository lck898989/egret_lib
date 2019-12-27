# -- coding: utf-8 --
import os
import shutil
import json
import hashlib
import time

mainjsmd5=''

# //TBH5CONAN
# //本地目录
mkPath = ''
# 服务器目录
# mkPath = '/usr/local/mk_game-cd/cd/prjqa/lrsH5Hall'
releaseOutPath = os.getcwd()+'/outPut'
inputPath = os.getcwd()+'/bin-release/web/68/'
manifestpath = os.getcwd()+'/manifest.json'
codeOutPath = releaseOutPath+'/static'
prefixUrl = ''

allHashMap = {}

bidstr = ""

# 用到需要拷贝的库
createdirs = []
copyLibs = []
pubResJsons = []
pubThmJsons = []
copyFilsToRoot = []
copyFilsToStatic = []
deldirs = []

def isFileExist(path):
    return os.path.exists(path);

def findFileMd5InHash(path):
    a = allHashMap[path];
    (pname,ename,fname) = getFileNameAndExt(a);
    # print('get hash -------->',path,'--->>>>',fname)
    return fname;

def outPutRelease():
    if os.path.exists(releaseOutPath):
        shutil.rmtree(releaseOutPath);
    os.mkdir(releaseOutPath);
    os.mkdir(releaseOutPath+"/static");
    
    for item in createdirs:
        print(item)
        os.mkdir(releaseOutPath+"/static/"+item);
    

    for item in copyFilsToStatic:    
        shutil.copy(inputPath+item,releaseOutPath+"/static/");
    for item in copyFilsToRoot:
        shutil.copy(inputPath+item,releaseOutPath+"/");


    for item in copyLibs:
        copy_files(inputPath+item,releaseOutPath+"/static/"+item);

def delNotUseFile():
    for item in deldirs:
        shutil.rmtree(releaseOutPath+"/static/"+item);

def changeIndexHtmlFileContent():
    if isFileExist(releaseOutPath+'/index.html') == False:
        return
    f = open(releaseOutPath+'/index.html','r+')
    lines = f.readlines()
    lcount = len(lines)
    i = 0
    while i < lcount:
        l = lines[i]
        if 'egret="lib" src="' in l:
            newl = l.replace('egret="lib" src="','egret="lib" src="static/')
            lines[i]=newl
        if 'egret.runEgret({renderMode' in l :
            newl = l.replace('egret.runEgret({renderMode','//egret.runEgret({renderMode')
            lines[i]=newl
        i=i+1
    f.close()
    f = open(releaseOutPath+'/index.html','w+')
    for _i in  lines:
        f.write(_i)
    f.close()



#replace res.json and thm.json name with their md5 code, then rename this two files
def replaceMainjs(content,path):
    filepath = path
    resmd5code = ''
    (pname,ename,fname) = getFileNameAndExt(filepath)
    if isFileExist(filepath) == False:
        resmd5code = findFileMd5InHash(filepath)
    else:
        resmd5code = mkFileNameWithMD5Code(filepath)
        os.rename(filepath,pname+'/'+resmd5code+ename)
        allHashMap[filepath]=pname+'/'+resmd5code+ename;
    newcontent1 = "";
    if content.find('resource/'+fname+ename)>=0:
        newcontent1 = content.replace('resource/'+fname+ename,prefixUrl+'/resource/'+resmd5code+ename+bidstr)
    return newcontent1
        

def changeMainJsContent():
    #read main js
    oldname = "main.min.js"
    mainxxxxpath = releaseOutPath+"/static/"+oldname
    
    f = open(mainxxxxpath,'r+')
    lines = f.readlines()
    lcount = len(lines)
    i = 0
    content=''
    while i < lcount:
        l = lines[i]
        content=content+l
        i=i+1
    f.close()

    for item in pubResJsons :
        filepath = releaseOutPath+'/static/resource/'+item
        content = replaceMainjs(content,filepath)

    for item in pubThmJsons :
        filepath = releaseOutPath+'/static/resource/'+item
        content = replaceMainjs(content,filepath)
    

    #write back to file
    f = open(mainxxxxpath+mainjsmd5,'w+')
    f.write(content)
    f.close()

def mkFileNameWithMD5Code(path):
    f = open(path)
    md5code = mkFileMD5Code(f)

    return md5code

def mkFileMD5Code(f):
    myhash = hashlib.md5()
    while True:
        b = f.read(8096)
        if not b :
            break
        myhash.update(b)
    f.close()
    return myhash.hexdigest()

def getFileNameAndExt(filename):
    (filepath,tempfilename) = os.path.split(filename);
    (shotname,extension) = os.path.splitext(tempfilename);
    return filepath,extension,shotname


def copy_files(frompath,topath):
    srcfiles = os.listdir(frompath)
    for f in srcfiles:
        if os.path.isdir(frompath+'/'+f):
            copypath= frompath+'/'+f
            if os.path.exists(topath+'/'+f):
                shutil.rmtree(topath+'/'+f)
            os.mkdir(topath+'/'+f)
            copy_files(copypath,topath+'/'+f)
        if os.path.isfile(frompath+'/'+f):
            shutil.copy(frompath+'/'+f,topath)

def publishToGit():
    #first, delet mk path file
    copy_files(releaseOutPath,mkPath)
    localpath = os.getcwd()
    systimestr = "update from auto script, so this message not change :"+time.ctime(time.time())
    os.chdir(mkPath+'/')
    os.chdir(localpath)
    shutil.rmtree(releaseOutPath)


###################################################################


###################################################################

def changeGameBaseJScontent():
    #read main js
    oldname = "gameBase.min.js"
    mainxxxxpath = releaseOutPath+"/static/"+oldname
    f = open(mainxxxxpath,'r+')
    lines = f.readlines()
    lcount = len(lines)
    i = 0
    content=''
    while i < lcount:
        l = lines[i]
        content=content+l
        i=i+1
    f.close()

    for item in pubResJsons :
        filepath = releaseOutPath+'/static/resource/'+item
        content = replaceLRSHalljs(content,filepath)
    
    for item in pubThmJsons :
        filepath = releaseOutPath+'/static/resource/'+item
        content = replaceLRSHalljs(content,filepath)
        
        #write back to file
    f = open(mainxxxxpath+mainjsmd5,'w+')
    f.write(content)
    f.close()



def publishGameBaseToGit():
    # copy_files(releaseOutPath+"/static/resource",mkPath+"/static/resource")
    # shutil.copy(releaseOutPath+"/static/lrsHall.min.js",mkPath+"/static")
    copy_files(releaseOutPath,mkPath)
    shutil.rmtree(releaseOutPath)
###################################################################



###################################################################


def startProcessTs():
    if os.path.exists(os.getcwd()+'/../t_src'):
        shutil.rmtree(os.getcwd()+'/../t_src');
    os.mkdir(os.getcwd()+'/../t_src');
    copy_files(os.getcwd()+'/bin-debug',os.getcwd()+'/../t_src');


def buildTargetProject():
    os.system('egret clean')
    os.system('egret build')


def makeGameBasecode():
    f = open(manifestpath,'r+')
    lines = f.readlines()
    lcount = len(lines)
    i = 0
    jsonstr=''
    while i < lcount:
        l = lines[i]
        jsonstr=jsonstr+l
        i=i+1
    f.close()

    jsonObj = json.loads(jsonstr)
    gamesrcarray = jsonObj['game']
    tempstr = ''
    for src in gamesrcarray:
        filepath = os.getcwd()+'/'+src
        if filepath.find('/framework/') >=0:
            tempstr += ' '+filepath;
    systemstr = 'uglifyjs --compress --mangle -- '+tempstr+' > '+os.getcwd()+'/../framework.min.js'
    os.system(systemstr);

def removeFrameworkReflectRecover(filepath):
    f = open(filepath,'r+')
    lines = f.readlines()
    lcount = len(lines)
    print(lcount)
    content = ""
    i = 0
    while i < lcount:
        l = lines[i]
        content = content+l
        i=i+1

    newcontent = content.replace('__reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n};','')
    newcontent = content.replace('var __awaiter=this&&this.__awaiter||function(o,s,a,c){return new(a||(a=Promise))(function(t,e){function n(t){try{i(c.next(t))}catch(t){e(t)}}function r(t){try{i(c.throw(t))}catch(t){e(t)}}function i(e){e.done?t(e.value):new a(function(t){t(e.value)}).then(n,r)}i((c=c.apply(o,s||[])).next())})},__generator=this&&this.__generator||function(n,r){var i,o,s,t,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,o&&(s=o[2&e[0]?"return":e[0]?"throw":"next"])&&!(s=s.call(o,e[1])).done)return s;switch(o=0,s&&(e=[0,s.value]),e[0]){case 0:case 1:s=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,o=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(!(s=0<(s=a.trys).length&&s[s.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!s||e[1]>s[0]&&e[1]<s[3])){a.label=e[1];break}if(6===e[0]&&a.label<s[1]){a.label=s[1],s=e;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(e);break}s[2]&&a.ops.pop(),a.trys.pop();continue}e=r.call(n,a)}catch(t){e=[6,t],o=0}finally{i=s=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}},','')
    newcontent = newcontent.replace('__reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);n.prototype=e.prototype,t.prototype=new n};','')
    newcontent = newcontent.replace('__reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},var __awaiter=this&&this.__awaiter||function(o,s,a,c){return new(a||(a=Promise))(function(t,e){function n(t){try{i(c.next(t))}catch(t){e(t)}}function r(t){try{i(c.throw(t))}catch(t){e(t)}}function i(e){e.done?t(e.value):new a(function(t){t(e.value)}).then(n,r)}i((c=c.apply(o,s||[])).next())})},__generator=this&&this.__generator||function(n,r){var i,o,s,t,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,o&&(s=o[2&e[0]?"return":e[0]?"throw":"next"])&&!(s=s.call(o,e[1])).done)return s;switch(o=0,s&&(e=[0,s.value]),e[0]){case 0:case 1:s=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,o=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(!(s=0<(s=a.trys).length&&s[s.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!s||e[1]>s[0]&&e[1]<s[3])){a.label=e[1];break}if(6===e[0]&&a.label<s[1]){a.label=s[1],s=e;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(e);break}s[2]&&a.ops.pop(),a.trys.pop();continue}e=r.call(n,a)}catch(t){e=[6,t],o=0}finally{i=s=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}},','')
    newcontent = newcontent.replace('var __reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);n.prototype=e.prototype,t.prototype=new n},','var __reflect=this&&this.__reflect||function(e,t,r){e.__class__=t,r?r.push(t):r=[t],e.__types__=e.__types__?r.concat(e.__types__):r},__extends=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r},__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{h(n.next(e))}catch(t){o(t)}}function s(e){try{h(n["throw"](e))}catch(t){o(t)}}function h(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(a,s)}h((n=n.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function r(e){return function(t){return n([e,t])}}function n(r){if(i)throw new TypeError("Generator is already executing.");for(;h;)try{if(i=1,o&&(a=o[2&r[0]?"return":r[0]?"throw":"next"])&&!(a=a.call(o,r[1])).done)return a;switch(o=0,a&&(r=[0,a.value]),r[0]){case 0:case 1:a=r;break;case 4:return h.label++,{value:r[1],done:!1};case 5:h.label++,o=r[1],r=[0];continue;case 7:r=h.ops.pop(),h.trys.pop();continue;default:if(a=h.trys,!(a=a.length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){h=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){h.label=r[1];break}if(6===r[0]&&h.label<a[1]){h.label=a[1],a=r;break}if(a&&h.label<a[2]){h.label=a[2],h.ops.push(r);break}a[2]&&h.ops.pop(),h.trys.pop();continue}r=t.call(e,h)}catch(n){r=[6,n],o=0}finally{i=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var i,o,a,s,h={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:r(0),"throw":r(1),"return":r(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},')
    f.close()
    f = open(filepath,'w+')
    f.write(newcontent)
    f.close()


###################################################################
buildTargetProject()
startProcessTs()
makeGameBasecode()
removeFrameworkReflectRecover(os.getcwd()+'/../framework.min.js')
# prcessGiftExml()
# delNotUseFile()

# makeGameBasecode()
# changeGameBaseResJsonContent()
# changeGameBaseJScontent()

# publishGameBaseToGit()

