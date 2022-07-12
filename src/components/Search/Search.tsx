import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSearch } from '../../hooks/search';
import { Col, Image, Row, Select, Subtitle } from '../bulma';
import { SelectOption } from '../bulma/Form/Form';
import { FormatListItem, List } from '../List/List';

export const SearchView = () => {
  const paths = useLocation().pathname.split('/');
  const searchType = paths[paths.length - 1];
  const { data, loadData } = useSearch(searchType);
  const history = useHistory();

  const [searchText, setSearchText] = useState<string>('');

  const formatUser: FormatListItem = {
    title: {
      dataIndex: 'login',
    },
    image: {
      dataIndex: 'avatar_url',
      render: (data: any) => {
        console.log(data);
        return <Image isRounded square={128} src={data?.avatar_url} />
      }
    },
    body: [],
    footer: [
      {
        dataIndex: 'url',
        render: (data: any) => (
          <button 
            className="button is-link"
            onClick={() => {
              history.push(`/user/${data.login}`)
            }}
          >
            View More...
          </button>
        ),
      }
    ],
    span: 4,
  }

  const formatRepository: FormatListItem = {
    title: {
      dataIndex: 'name',
    },
    subtitle: {
      dataIndex: 'owner.login',
      render: (data: any) => (
        <Subtitle>{data?.owner?.login}</Subtitle>
      )
    },
    body: [],
    footer: [{
      dataIndex: 'url',
      render: (data: any) => (
        <button 
          className="button is-link"
          onClick={() => {
            history.push(`/repos/${data.owner.login}/${data.name}`)
          }}
        >
          View More...
        </button>
      ),
    }],
    span: 12,
  }
  
  const options: SelectOption[] = [
    {
      label: 'Users',
      value: 'users',
    },
    {
      label: 'Repos',
      value: 'repositories',
    },
  ];

  useEffect(() => {
    loadData(searchText);
  }, [loadData, searchText])

  return (
    <div className="container">
      <div className="field is-grouped">
        <Row>
          <Col>
            <div className="control">
              <input 
                className="input is-info is-normal is-focused" 
                type="text" 
                placeholder={`Search ${searchType}...`}
                onChange={e => {
                  setSearchText(e.target.value);
                }}
                value={searchText}
              />
            </div>
          </Col>
          <Col>
            <Select 
              options={options}
              onChange={(e: any) => {
                history.push(`/search/${e.target.value}`);
              }}
              value={searchType}
            />
          </Col>
        </Row>
      </div>
      <div>
        <List data={data} format={searchType === 'users' ? formatUser : formatRepository} />
      </div>
    </div>
  )
}