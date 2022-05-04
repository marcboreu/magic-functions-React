

const handle = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseInt(value) : value;
    this.setState({ [name]: val });
}

