import * as $ from 'jquery'
import {Post} from "./Post";
import './styles/style.css'
import './babel'
const post = new Post('Wepback Post title')
$('pre').addClass('code').html(post.toString())
// console.log('Post to String', post.toString())