from flask import Flask, render_template, request, jsonify, render_template_string

app = Flask(__name__, static_folder='static', static_url_path='/static')

@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")

@app.route('/js/index.js', methods=['GET'])
def js_script():
    return render_template('js/index.js')

@app.route('/upload', methods=["POST"])
def upload():
    keys = request.files['keys'] if 'keys' in request.files else None
    products = request.files['products'] if 'products' in request.files else None
    def gen_error(error: str):
        response = jsonify({
            'error': error
        })
        response.status_code = 400
        return response

    if not keys:
        gen_error('Missed file with keys')

    if not products:
        gen_error('Missed file with products')

    result = '1; 1'
    #TODO process

    return render_template_string(result)

