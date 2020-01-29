import React from 'react';
import CommentComponent from './CommentComponent';

class CommentsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenComments: false
        };
        this.onButtonClick = this.onButtonClick.bind(this);

       
    }


    onButtonClick() {
        this.setState({
            isOpenComments: !this.state.isOpenComments
        });

    }


    render() {
        const {comments} = this.props;
        return (

            <div className="card">

                <button className={`btn2 ${this.state.isOpenComments
                    ? 'btn2-danger'
                    : 'btn2-success'
                    }`}
                        onClick={this.onButtonClick}
                >
                    {this.state.isOpenComments
                        ? 'Close'
                        : 'Open'
                    }
                </button>

                {this.state.isOpenComments && (
                    <div> 
                         {comments.map(comment => (
                            <CommentComponent author={comment.author}
                                      commentText={comment.commentText}
                                      likes={comment.likes}
                                      key={comment.author}    
                            />
                        ))}
                    </div>
                )}
               

            </div>

        );
    }
}

export default CommentsContainer;





// class ReplyForm extends React.Component {
//     constructor() {
//       super()
//     }
//     render(){
//       return(
//         <div>I'm ReplyForm</div>
//       )
//     }
//   }
  
//   class CommentBox extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         showReply: false
//       }
//     }
//     onClick(e){
//       e.preventDefault();
//       this.setState({showReply: !this.state.showReply})
//     }
//     render() {
//       return (
//         <div>
//           <p>Some comment</p>
//            <a onClick={this.onClick.bind(this)} href='#'>Post a reply to this comment</a>
//           {this.state.showReply && < ReplyForm / >}
//         </div>
//       )
//     }
//   }
          
//   React.render(<CommentBox />, document.getElementById('app'))