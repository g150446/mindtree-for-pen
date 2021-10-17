import datetime

dt_now = datetime.datetime.now()
dtstr = dt_now.strftime('%Y-%m-%d %H:%M:%S')
with open("original.html") as f:

    s=f.read()

with open("index.html","w") as f:

  f.write(s.replace(".js", f".js?ver={dt_now.microsecond}").replace("Running", dtstr) )
