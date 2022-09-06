
function TaskItem(props) {
    var {task, index} = props.task;
    return (
    <tr>
        <td>{index}</td>
        <td>{task.name}</td>
        <td className="text-center">
            <span className="label label-success">
                Kích Hoạt
            </span>
        </td>
        <td className="text-center">
            <button type="button" className="btn btn-warning">
                <span className="fa fa-pencil mr-5"></span>Sửa
            </button>
            &nbsp;
            <button type="button" className="btn btn-danger">
                <span className="fa fa-trash mr-5"></span>Xóa
            </button>
        </td>
    </tr>
  );
}

export default TaskItem;