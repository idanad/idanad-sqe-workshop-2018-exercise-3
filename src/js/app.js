import $ from 'jquery';
import {parseCode,generateGraph, evaluateParams} from './code-analyzer';

$(document).ready(function () {
    $('#graphCreatorButton').click(() => {
        let codeToParse = $('#codePlaceholder').val();
        let init = evaluateParams(parseCode($('#parametersPlaceholder').val()));

        let Graph = generateGraph(parseCode(codeToParse), init);

        let graphArea = document.getElementById('graphArea');
        graphArea.innerHTML = '';
        graphArea.append(Graph);
    });
});