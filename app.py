from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

PASSWORD = "iloveus"   # change this

@app.route("/", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        password = request.form.get("password")
        if password == PASSWORD:
            return redirect(url_for("intro"))
    return render_template("login.html")

@app.route("/intro")
def intro():
    return render_template("intro.html")

@app.route("/timeline")
def timeline():
    return render_template("timeline.html")

@app.route("/love")
def love():
    return render_template("love.html")

@app.route("/puzzle")
def puzzle():
    return render_template("puzzle.html")

@app.route("/quiz")
def quiz():
    return render_template("quiz.html")

@app.route("/memories")
def memories():
    return render_template("memories.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)

